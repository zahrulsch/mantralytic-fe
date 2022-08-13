import { useNotification } from 'naive-ui';
import { h } from 'vue';

const hydrate = (text: string, iconClass?: string, contentClass?: string) => {
  return () => h('div', {
    class: 'is-flex t-gap-x-3 is-align-items-center'
  }, [
    h('i', {
      class: `${iconClass} t-font-size-14`
    }),
    h('span', {
      class: contentClass || 't-font-size-14 has-text-weight-medium t-color-3'
    }, text)
  ])
}

const metaGenerator = () => new Date().toLocaleDateString('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: 'numeric',
  second: 'numeric'
})

export const useTNotification = () => {
  const notif = useNotification()

  return (text: string, iconClass?: string, contentClass?: string) => notif.create({
    meta: metaGenerator(),
    content: hydrate(text, iconClass, contentClass),
    duration: 2500,
    closable: true,
    keepAliveOnHover: true
  })
}