export type PropType<
  Component extends React.Component,
  PropName extends keyof Component['props'],
> = Component['props'][PropName];
