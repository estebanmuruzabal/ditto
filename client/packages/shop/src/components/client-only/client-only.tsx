export { ClientOnly }

import React from 'react'

function ClientOnly(props) {
  const [Component, setComponent] = React.useState(() => props.fallback)

  React.useEffect(() => {
    setComponent(() => React.lazy(props.component))
  }, [])

  return (
    <React.Suspense fallback={props.fallback}>
      <Component />
    </React.Suspense>
  )
}