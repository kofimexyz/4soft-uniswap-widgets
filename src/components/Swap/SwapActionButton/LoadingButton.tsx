import { Trans } from '@lingui/macro'
import ActionButton from 'components/ActionButton'
import useTokenColorExtraction from "../../../hooks/useTokenColorExtraction";
import { useEffect, useState } from "react";

const dots = ['', '.', '. .', '. . .'] as const;

/** An LoadingButton */
export default function LoadingButton() {
  const color = useTokenColorExtraction()
  const [state, setState] = useState<string>(dots[0]);

  useEffect(() => {
    let i = 0;

    setInterval(() => {
      setState(dots[++i % 4])
    }, 500);
  }, []);

  return (
      <ActionButton color={color} disabled data-testid="loading-button">
        <Trans>{state}</Trans>
      </ActionButton>
  )
}
