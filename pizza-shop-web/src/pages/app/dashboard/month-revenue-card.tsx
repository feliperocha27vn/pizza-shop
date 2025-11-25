import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'

export function MonthRevenueCard() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-base font-bold">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">R$ 1248,68</span>
        <p className="text-xs text-muted-foreground">
          Em comparação com o mês passado:{' '}
          <span className="text-emerald-500 dark:text-emerald-400">+ 10%</span>
        </p>
      </CardContent>
    </Card>
  )
}
