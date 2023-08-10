import Image from 'next/image'
import { CSSProperties, ReactNode } from 'react'

interface ViewProps {
  children: ReactNode
  style?: CSSProperties
}

const View = ({ children, style = {}, ...rest }: ViewProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...style }} {...rest}>
      {children}
    </div>
  )
}

const Text = ({ children, style = {}, ...rest }: ViewProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', ...style }} {...rest}>
    {children}
  </div>
)

export default function Home() {
  return (
    <View style={{ height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 100, height: 100, overflow: 'hidden' }}>
        <Image src={'/UOE-green.png'} width={100} height={100} alt={'University logo'} />
      </View>

      <View>
        <Text
          style={{
            fontFamily: 'sans-serif',
            textAlign: 'center',
            fontWeight: 400,
            fontSize: 25,
            marginTop: 25,
          }}
        >
          Your Account
        </Text>
        <Text style={{ fontFamily: 'sans-serif', textAlign: 'center', fontSize: 18 }}>
          Manage your Exeter Account
        </Text>
      </View>
      <View style={{ marginTop: 40 }}>
        <Text style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>coming soon...</Text>
      </View>
    </View>
  )
}
