// src/pages/Detect.tsx

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Search, History, Info } from 'lucide-react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { UploadZone } from '../components/detect/UploadZone';
import { ResultCard } from '../components/detect/ResultCard';
import { useDetectStore } from '../store/detectStore';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { formatDate } from '../utils/formatters';

export default function Detect() {
  const { result, isLoading, loadingStep, detect, resetResult, scanHistory, loadHistory } = useDetectStore();

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  const handleFileSelect = (file: File) => {
    detect(file);
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-text-primary tracking-tight flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green">
                <Leaf className="h-6 w-6" />
              </div>
              Disease Detection
            </h1>
            <p className="text-text-muted mt-1">Upload a clear photo of the affected leaf for instant diagnosis</p>
          </div>
          
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-text-secondary">
            <Info className="h-4 w-4 text-accent-blue" />
            Powered by Keras + Gemini Vision
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Upload */}
          <div className="space-y-6">
            <UploadZone 
              onFileSelect={handleFileSelect} 
              isLoading={isLoading} 
              loadingStep={loadingStep} 
            />
            
            <Card className="bg-accent-blue/5 border-accent-blue/20">
              <h4 className="text-sm font-bold text-accent-blue mb-2 flex items-center gap-2">
                <Info className="h-4 w-4" />
                Tips for better results
              </h4>
              <ul className="text-xs text-text-secondary space-y-2 list-disc pl-4">
                <li>Ensure the leaf is well-lit and in focus</li>
                <li>Capture the affected area clearly</li>
                <li>Use a plain background if possible</li>
                <li>Avoid blurry or dark images</li>
              </ul>
            </Card>
          </div>

          {/* Right - Results */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {result ? (
                <ResultCard 
                  key="result"
                  data={result.data} 
                  source={result.source} 
                  onReset={resetResult} 
                />
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center p-12 rounded-3xl border-2 border-dashed border-border-light bg-bg-card/30"
                >
                  <div className="relative mb-8">
                    <Leaf className="h-24 w-24 text-text-dim" />
                    <Search className="absolute -bottom-2 -right-2 h-10 w-10 text-accent-green animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">Upload a leaf photo</h3>
                  <p className="text-text-muted max-w-xs">Your diagnosis, treatment plan, and prevention strategies will appear here.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* History Section */}
        <div className="pt-12 space-y-6">
          <div className="flex items-center gap-3">
            <History className="h-6 w-6 text-accent-green" />
            <h2 className="text-2xl font-bold text-text-primary">Your Recent Scans</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scanHistory.map((scan, i) => (
              <motion.div
                key={scan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card hover className="p-0 overflow-hidden group">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={scan.imageUrl} 
                      alt={scan.detectedDisease} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant={scan.severity === 'High' || scan.severity === 'Critical' ? 'error' : 'warning'}>
                        {scan.severity}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-text-primary truncate mb-1">{scan.detectedDisease}</h4>
                    <p className="text-xs text-text-muted">{formatDate(scan.createdAt)}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
