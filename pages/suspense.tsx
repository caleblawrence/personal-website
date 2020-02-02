import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('../components/suspense-example/SuspenseExample'), {
  ssr: false
})

export default () => <DynamicComponentWithNoSSR />

