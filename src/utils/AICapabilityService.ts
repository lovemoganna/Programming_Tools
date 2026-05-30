/**
 * AICapabilityService
 * 
 * Detects system capabilities for Local AI Inference (WebLLM / WASM).
 * Specifically checks for WebGPU support which is required for high-performance 
 * local LLM execution.
 */

export interface AICapabilities {
  webGPUSupported: boolean;
  webWorkerSupported: boolean;
  recommendedModel: 'phi-3-mini' | 'llama-3-8b' | 'tiny-llama' | 'none';
  deviceMemoryGB?: number;
}

export const AICapabilityService = {
  /**
   * Performs a comprehensive check of the browser's AI readiness
   */
  checkCapabilities: async (): Promise<AICapabilities> => {
    const webWorkerSupported = typeof Worker !== 'undefined';
    
    let webGPUSupported = false;
    try {
      if ('gpu' in navigator) {
        // // [GPU-Timeout-Fix] Race requestAdapter against a 2000ms timeout to avoid hanging drivers
        const adapterPromise = (navigator as any).gpu.requestAdapter();
        const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 2000));
        const adapter = await Promise.race([adapterPromise, timeoutPromise]);
        if (adapter) webGPUSupported = true;
      }
    } catch (e) {
      console.warn("WebGPU not supported or disabled:", e);
    }

    // Determine recommended model based on device stats
    const memory = (navigator as any).deviceMemory || 4; // Default to 4GB if API not available
    let recommendedModel: AICapabilities['recommendedModel'] = 'none';

    if (webGPUSupported) {
      if (memory >= 16) recommendedModel = 'llama-3-8b';
      else if (memory >= 8) recommendedModel = 'phi-3-mini';
      else recommendedModel = 'tiny-llama';
    } else {
      // Future: Fallback to WASM-only (slower)
      recommendedModel = 'tiny-llama';
    }

    return {
      webGPUSupported,
      webWorkerSupported,
      recommendedModel,
      deviceMemoryGB: memory
    };
  },

  /**
   * Checks if the browser meets the minimum requirements for the "AI Sandbox" features
   */
  isAIReady: async (): Promise<boolean> => {
    const caps = await AICapabilityService.checkCapabilities();
    return caps.webGPUSupported || caps.webWorkerSupported;
  }
};
