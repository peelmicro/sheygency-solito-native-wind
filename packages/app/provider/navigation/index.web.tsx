// on Web, we don't use React Navigation, so we avoid the provider altogether
// instead, we just have a no-op here
// for more, see: https://solito.dev/recipes/tree-shaking
import Head from 'next/head'
import { useRouter } from 'next/router'
import { View, Text } from 'react-native'
import Link from 'next/link'
import useCachedResources from '../../hooks/useCachedResources'

export const NavigationProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const router = useRouter()
  const menuItems = [
    {
      title: 'Home',
      path: '/',
      icon: 'ri-home-smile-line',
    },
    {
      title: 'About',
      path: '/about',
      icon: 'ri-information-line',
    },
    {
      title: 'Clients',
      path: '/clients',
      icon: 'ri-user-location-line',
    },
    {
      title: 'Contact',
      path: '/contact',
      icon: 'ri-contacts-fill',
    },
  ]
  const isLoaded = useCachedResources()
  if (!isLoaded) {
    return (
      <View>
        <Text>Resources are loading...</Text>
      </View>
    )
  }
  return (
    <>
      <Head>
        <title>Sheygency - Nextjs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Sheygency NetxJS version." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* content */}
      <main className="">
        {/* content */}
        {/* <div className="pb-14 overflow-x-hidden">{children}</div> */}
        <div className="pb-14">{children}</div>

        {/* footer */}
        <div className="fixed bottom-0 left-0 right-0 md:bottom-2">
          <div className="flex w-full justify-center">
            {menuItems.map((item, index) => (
              <div
                key={item.path}
                className="flex flex-col justify-end items-center"
              >
                {router.asPath === item.path && (
                  <div className="flex flex-col items-center">
                    <div className="h-5 w-10 bg-primary rounded-t-full"></div>
                    <div className="h-5 w-20 bg-primary rounded-t-full text-center">
                      <i className={`${item.icon} text-white text-xl`}></i>
                    </div>
                  </div>
                )}
                <div
                  className={`px-8 md:px-20 bg-primary py-5 ${
                    index === 0 && 'rounded-l'
                  } ${
                    index === menuItems.length - 1 && 'rounded-r'
                  } flex items-center justify-center space-x-2`}
                >
                  {router.asPath !== item.path && (
                    <i
                      onClick={() => router.push(item.path)}
                      className={`${item.icon} text-secondary text-xl`}
                    ></i>
                  )}
                  <Link href={item.path}>
                    <a
                      className={`text-secondary text-xl ${
                        router.asPath === item.path ? 'flex' : 'hidden md:flex'
                      } `}
                    >
                      {item.title}
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
