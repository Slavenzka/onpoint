import React from 'react'

const DiagramSmall = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1156 520"
      className={className}
    >
      <defs>
        <filter id="Filter_0">
          <feFlood floodColor="rgb(255, 255, 255)" floodOpacity="1" result="floodOut" />
          <feComposite operator="atop" in="floodOut" in2="SourceGraphic" result="compOut" />
          <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
        </filter>
        <filter id="Filter_1">
          <feFlood floodColor="rgb(255, 255, 255)" floodOpacity="1" result="floodOut" />
          <feComposite operator="atop" in="floodOut" in2="SourceGraphic" result="compOut" />
          <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
        </filter>
        <filter id="Filter_2">
          <feFlood floodColor="rgb(255, 255, 255)" floodOpacity="1" result="floodOut" />
          <feComposite operator="atop" in="floodOut" in2="SourceGraphic" result="compOut" />
          <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
        </filter>
        <filter id="Filter_3">
          <feFlood floodColor="rgb(255, 255, 255)" floodOpacity="1" result="floodOut" />
          <feComposite operator="atop" in="floodOut" in2="SourceGraphic" result="compOut" />
          <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
        </filter>
        <filter id="Filter_4">
          <feFlood floodColor="rgb(255, 255, 255)" floodOpacity="1" result="floodOut" />
          <feComposite operator="atop" in="floodOut" in2="SourceGraphic" result="compOut" />
          <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
        </filter>

      </defs>
      <g opacity="0.1">
        <path fillRule="evenodd"  opacity="0.902" fill="rgb(255, 255, 255)"
              d="M82.891,330.000 C128.394,330.000 165.281,366.936 165.281,412.500 C165.281,458.064 128.394,495.000 82.891,495.000 C37.388,495.000 0.500,458.064 0.500,412.500 C0.500,366.936 37.388,330.000 82.891,330.000 Z"/>
        <path fillRule="evenodd"  opacity="0.902" fill="rgb(255, 255, 255)"
              d="M576.078,0.000 C621.581,0.000 658.469,36.937 658.469,82.500 C658.469,128.064 621.581,165.000 576.078,165.000 C530.575,165.000 493.687,128.064 493.687,82.500 C493.687,36.937 530.575,0.000 576.078,0.000 Z"/>
        <path fillRule="evenodd"  opacity="0.902" fill="rgb(255, 255, 255)"
              d="M1072.297,329.000 C1117.800,329.000 1154.688,365.937 1154.688,411.500 C1154.688,457.063 1117.800,494.000 1072.297,494.000 C1026.794,494.000 989.906,457.063 989.906,411.500 C989.906,365.937 1026.794,329.000 1072.297,329.000 Z"/>
      </g>
      <g filter="url(#Filter_0)">
        <path fillRule="evenodd"  fill="rgb(0, 0, 0)"
              d="M487.531,119.675 L187.170,371.696 L190.161,375.006 L172.455,383.814 L182.924,366.997 L185.964,370.361 L486.325,118.340 L487.531,119.675 Z"/>
      </g>
      <g filter="url(#Filter_1)">
        <path fillRule="evenodd"  fill="rgb(0, 0, 0)"
              d="M982.545,383.814 L964.839,375.006 L967.830,371.696 L667.469,119.675 L668.675,118.340 L969.036,370.361 L972.076,366.997 L982.545,383.814 Z"/>
      </g>
      <g filter="url(#Filter_2)">
        <path fillRule="evenodd"  fill="rgb(0, 0, 0)"
              d="M578.231,296.233 L572.712,315.223 L567.437,296.128 L571.937,296.172 L572.932,181.553 L574.731,181.571 L573.736,296.189 L578.231,296.233 Z"/>
      </g>
      <g filter="url(#Filter_3)">
        <path fillRule="evenodd"  fill="rgb(0, 0, 0)"
              d="M303.004,430.618 L283.860,436.000 L283.904,431.408 L181.991,430.394 L182.008,428.558 L283.922,429.572 L283.965,424.988 L303.004,430.618 Z"/>
      </g>
      <g filter="url(#Filter_4)">
        <path fillRule="evenodd"  fill="rgb(0, 0, 0)"
              d="M967.009,430.394 L854.096,431.409 L854.140,436.000 L834.996,430.618 L854.035,424.988 L854.078,429.573 L966.992,428.558 L967.009,430.394 Z"/>
      </g>
      <path fillRule="evenodd"  stroke="rgb(255, 255, 255)" strokeWidth="2px" strokeLinecap="round" strokeLinejoin="miter" fill="none"
            d="M324.804,336.803 L816.196,336.803 L816.196,516.197 L324.804,516.197 L324.804,336.803 Z"/>
    </svg>
  )
}

export default DiagramSmall

