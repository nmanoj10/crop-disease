import { create } from 'zustand';
import { CropScan, DetectionResult } from '../types';
import { cropService } from '../services/cropService';

interface DetectState {
  result: DetectionResult | null;
  isLoading: boolean;
  loadingStep: string;
  error: string | null;
  scanHistory: CropScan[];
  detect: (file: File) => Promise<void>;
  resetResult: () => void;
  loadHistory: () => Promise<void>;
}

export const useDetectStore = create<DetectState>((set) => ({
  result: null,
  isLoading: false,
  loadingStep: '',
  error: null,
  scanHistory: [],
  detect: async (file: File) => {
    set({ isLoading: true, error: null, loadingStep: 'Loading model...' });

    try {
      setTimeout(() => set({ loadingStep: 'Running analysis...' }), 1000);
      setTimeout(() => set({ loadingStep: 'Checking with AI...' }), 2000);

      const result = await cropService.detect(file);
      const history = await cropService.getHistory();

      set({
        result,
        scanHistory: history,
        isLoading: false,
        loadingStep: '',
      });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : 'Detection failed',
        isLoading: false,
        loadingStep: '',
      });
    }
  },
  resetResult: () => set({ result: null, error: null }),
  loadHistory: async () => {
    const history = await cropService.getHistory();
    set({ scanHistory: history });
  },
}));
