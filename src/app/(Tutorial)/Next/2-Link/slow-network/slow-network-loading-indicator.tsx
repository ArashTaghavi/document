/** @format */

'use client'

import { useLinkStatus } from 'next/link'
import styles from './styles.module.css'

export default function LoadingIndicator() {
  const { pending } = useLinkStatus()

  return pending ? <i className={styles.spinner} /> : null
}
