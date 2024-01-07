import { Skeleton as SkeletonMUI } from '@mui/material'

const Skeleton = ({ variant = 'rectangular', width, height, ...args }) => {
  return (
    <SkeletonMUI variant={variant} width={width} height={height} {...args} />
  )
}

export default Skeleton
