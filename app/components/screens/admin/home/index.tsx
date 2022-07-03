import { Meta } from '@/components/SEO/Meta'
import { AdminNav } from '@/ui/admin-nav/AdminNav'
import { Heading } from '@/components/ui/Heading/Heading'
import React from 'react'
import { Statistics } from './Statistics/Statistics'

export const Admin = () => {
  return (
    <>
      <Meta title='Admin panel' />
      <AdminNav />
      <Heading title='Statistics' />
      <Statistics />
    </>
  )
}
