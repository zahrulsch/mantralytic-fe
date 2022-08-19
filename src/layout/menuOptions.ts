import { h } from "vue"
import type { MenuOption } from 'naive-ui'

function renderIcon(elementType: string, className: string) {
  return () => h(
    elementType,
    {
      class: className
    }
  )
}

export const menuOptions: MenuOption[] = [
  {
    label: 'Beranda',
    key: '/',
    icon: renderIcon("i", "bi bi-house-fill"),
  },
  {
    label: 'Daftar Koleksi',
    key: '/collection-maker',
    icon: renderIcon("i", "bi bi-collection-fill"),
  },
  {
    label: 'Statistik Produk',
    key: '/product-statistic',
    icon: renderIcon("i", "bi bi-bar-chart-fill"),
  },
  {
    label: 'Crawler Produk',
    key: '/product-crawler',
    icon: renderIcon("i", "bi bi-joystick"),
  },
]