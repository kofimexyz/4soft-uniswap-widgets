import 'polyfills'

import Swap, { SwapProps } from 'components/Swap'
import Widget, { WidgetProps } from 'components/Widget'
export type { Provider as EthersProvider } from '@ethersproject/abstract-provider'
export { TradeType } from '@uniswap/sdk-core'
export type { Currency } from '@uniswap/sdk-core'
export type { TokenInfo } from '@uniswap/token-lists'
export type { Provider as Eip1193Provider } from '@web3-react/types'
export type { ErrorHandler } from 'components/Error/ErrorBoundary'
export { SupportedChainId } from 'constants/chains'
export { DEFAULT_LOCALE, SUPPORTED_LOCALES } from 'constants/locales'
export type { SupportedLocale } from 'constants/locales'
export type { SwapController, SwapSettingsController } from 'hooks/swap/useSyncController'
export type { FeeOptions } from 'hooks/swap/useSyncConvenienceFee'
export type { DefaultAddress, TokenDefaults } from 'hooks/swap/useSyncTokenDefaults'
export type { OnTxFail, OnTxSubmit, OnTxSuccess, TransactionEventHandlers } from 'hooks/transactions'
export type { OnConnectWalletClick, WidgetEventHandlers } from 'hooks/useSyncWidgetEventHandlers'
export { Field } from 'state/swap'
export type {
  OnAmountChange,
  OnReviewSwapClick,
  OnSettingsReset,
  OnSlippageChange,
  OnSwitchTokens,
  OnTokenChange,
  OnTokenSelectorClick,
  OnTransactionDeadlineChange,
  SwapEventHandlers,
} from 'state/swap'
export type { Slippage } from 'state/swap/settings'
export { TransactionType } from 'state/transactions'
export type {
  ApprovalTransactionInfo,
  ExactInputSwapTransactionInfo,
  ExactOutputSwapTransactionInfo,
  SwapTransactionInfo,
  Transaction,
  TransactionInfo,
  UnwrapTransactionInfo,
  WrapTransactionInfo,
} from 'state/transactions'
export { darkTheme, defaultTheme, lightTheme } from 'theme'
export type { Theme } from 'theme'
export { invertTradeType, toTradeType } from 'utils/tradeType'

export type SwapWidgetProps = SwapProps & WidgetProps

export function SwapWidget(props: SwapWidgetProps) {
  return (
    <Widget {...props}>
      <Swap {...props} />
    </Widget>
  )
}
