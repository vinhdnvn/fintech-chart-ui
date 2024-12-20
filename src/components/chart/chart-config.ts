import { Volume } from 'lucide-react'
import { type ChartConfig} from '../../components/ui/chart'

const chartConfig = {
    Tvl:{
        label: "TVL",
        color: "red"
    },
    Volume:{
        label: "Volume",
        color: "blue"
    }
} satisfies ChartConfig