import BonusSeo from '@/components/bentos/BonusSeo'
import BonusPerformance from '@/components/bentos/BonusPerformance'
import BonusMetrics from '@/components/bentos/BonusMetrics'

function BonusContainer() {
  return (
    <div className='Bonus'>
      <BonusSeo />
      <BonusPerformance />
      <BonusMetrics />
    </div>
  )
}

export default BonusContainer
