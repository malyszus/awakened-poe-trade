import { ItemInfluence, ItemCategory } from '@/parser'
import { ItemModifier } from '@/parser/modifiers'

export interface ItemFilters {
  name?: {
    value: string
  }
  baseType?: {
    value: string
  }
  category?: {
    value: ItemCategory
  }
  rarity?: {
    value: string
  }
  linkedSockets?: {
    value: number
    disabled: boolean
  }
  whiteSockets?: {
    value: number
    disabled: boolean
  }
  corrupted?: {
    value: boolean
  }
  influences?: Array<{
    value: ItemInfluence
    disabled: boolean
  }>
  quality?: {
    value: number
    disabled: boolean
  }
  gemLevel?: {
    min: number
    max?: number
    disabled: boolean
  }
  mapTier?: {
    value: number
  }
  mapBlighted?: {
    value: true
  }
  itemLevel?: {
    value: number
    disabled: boolean
  }
  trade: {
    offline: boolean
    listed: string | undefined
  }
}

export interface StatFilter {
  readonly tradeId: string | string[]
  readonly text: string
  readonly roll?: number
  readonly type: string
  readonly option?: ItemModifier['option']
  readonly defaultMin?: number
  readonly defaultMax?: number
  readonly boundMin?: number
  readonly boundMax?: number
  readonly variant?: true
  readonly hidden?: string
  disabled: boolean
  min: number | '' | undefined
  max: number | '' | undefined
}

export type INTERNAL_TRADE_ID =
  'armour.armour' |
  'armour.evasion_rating' |
  'armour.energy_shield' |
  'armour.block' |
  'weapon.total_dps' |
  'weapon.physical_dps' |
  'weapon.elemental_dps' |
  'weapon.crit'

export const INTERNAL_TRADE_ID = [
  'armour.armour',
  'armour.evasion_rating',
  'armour.energy_shield',
  'armour.block',
  'weapon.total_dps',
  'weapon.physical_dps',
  'weapon.elemental_dps',
  'weapon.crit'
]
