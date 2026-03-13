import { motion } from 'framer-motion';
import {
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Info,
  MessageSquare,
  RefreshCw,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import { DiseaseData, DetectionSource } from '../../types';
import { formatPercent } from '../../utils/formatters';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface ResultCardProps {
  data: DiseaseData;
  source: DetectionSource;
  onReset: () => void;
}

const severityVariant = {
  Low: 'success',
  Medium: 'warning',
  High: 'error',
  Critical: 'error',
} as const;

export const ResultCard = ({ data, source, onReset }: ResultCardProps) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
    <Card className="border-accent-green/30 bg-gradient-to-br from-bg-card to-bg-primary">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant={source === 'AI Model' ? 'success' : 'info'}>{source}</Badge>
            <Badge variant={severityVariant[data.severity]}>{data.severity} Severity</Badge>
          </div>
          <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">{data.disease_name}</h2>
        </div>
        <div className="h-16 w-16 rounded-2xl bg-accent-green/10 flex items-center justify-center text-accent-green">
          {data.is_healthy ? <CheckCircle2 className="h-10 w-10" /> : <AlertTriangle className="h-10 w-10" />}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-bold">
            <span className="text-text-muted">Confidence Score</span>
            <span className="text-accent-green">{formatPercent(data.confidence)}</span>
          </div>
          <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${data.confidence}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className={`h-full rounded-full ${data.confidence > 70 ? 'bg-accent-green' : 'bg-accent-amber'}`}
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-bold">
            <span className="text-text-muted">Affected Leaf Area</span>
            <span className="text-accent-orange">{formatPercent(data.affected_area_percent)}</span>
          </div>
          <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${data.affected_area_percent}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-accent-orange rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <details open className="group">
          <summary className="flex items-center justify-between cursor-pointer p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors list-none">
            <div className="flex items-center gap-3">
              <Info className="h-5 w-5 text-accent-blue" />
              <span className="font-bold text-text-primary">Possible Causes</span>
            </div>
            <ChevronRight className="h-5 w-5 text-text-muted group-open:rotate-90 transition-transform" />
          </summary>
          <div className="p-4 pt-2 space-y-2">
            {data.causes.map((cause) => (
              <div key={cause} className="flex items-start gap-3 text-sm text-text-secondary">
                <div className="h-1.5 w-1.5 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                <p>{cause}</p>
              </div>
            ))}
          </div>
        </details>

        <details open className="group">
          <summary className="flex items-center justify-between cursor-pointer p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors list-none">
            <div className="flex items-center gap-3">
              <Stethoscope className="h-5 w-5 text-accent-green" />
              <span className="font-bold text-text-primary">Treatment Steps</span>
            </div>
            <ChevronRight className="h-5 w-5 text-text-muted group-open:rotate-90 transition-transform" />
          </summary>
          <div className="p-4 pt-2 space-y-3">
            {data.treatment.map((step, index) => (
              <div key={step} className="flex gap-4 p-3 rounded-xl bg-accent-green/5 border border-accent-green/10">
                <div className="h-6 w-6 rounded-full bg-accent-green text-bg-primary flex items-center justify-center text-xs font-bold shrink-0">
                  {index + 1}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </details>

        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors list-none">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-accent-lime" />
              <span className="font-bold text-text-primary">Prevention Strategy</span>
            </div>
            <ChevronRight className="h-5 w-5 text-text-muted group-open:rotate-90 transition-transform" />
          </summary>
          <div className="p-4 pt-2 space-y-2">
            {data.prevention.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                <div className="h-1.5 w-1.5 rounded-full bg-accent-lime mt-1.5 shrink-0" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </details>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Button className="flex-1 min-w-[200px]" onClick={() => (window.location.href = '/chat')}>
          <MessageSquare className="mr-2 h-5 w-5" />
          Ask AI About This
        </Button>
        <Button variant="outline" className="flex-1 min-w-[200px]" onClick={onReset}>
          <RefreshCw className="mr-2 h-5 w-5" />
          Scan Another
        </Button>
      </div>
    </Card>
  </motion.div>
);
