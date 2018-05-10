/**
 * cn - 文字
 * en - Text
 */
import React from 'react'
import { Rate } from 'shineout'
import FontAwesome from '../Icon/FontAwesome'

const star = <FontAwesome name="star" />
const StarRate = Rate(star, star)

export default function () {
  return (
    <StarRate value={4} text={['poor', 'fair', 'good', 'very good', 'excellent']} />
  )
}