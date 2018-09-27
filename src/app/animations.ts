import {
  animation,state, trigger, animateChild, group,
    transition, animate, style, query, AnimationTriggerMetadata
} from '@angular/animations';



// export const transAnimation = animation([
//   style({
//     height: '{{ height }}',
//     opacity: '{{ opacity }}',
//     backgroundColor: '{{ backgroundColor }}'
//   }),
//   animate('{{ time }}')
// ]);

export const slideNavAnimation  = animation ([
  state('open',
    style(
      {
      transform: 'translateY(-15vw)'
    }
    )),
    animate(3000)
]);




export function homeNavSlideAnim(triggerName): AnimationTriggerMetadata {
  return trigger(triggerName, [
    state('open', style({transform: 'translateY(-14vw)'})),
    transition('open <=> closed', animate('300ms ease-out'))
])
}


trigger('slider', [
  state('open', style(
    {
      transform: 'translateY(-14vw)'
    }
  ))
])

export function TranslateX( name: string, x: string, duration: number ): AnimationTriggerMetadata {
  return trigger( name, [
    state('false', style({ transform: 'translateX(0)' }) ),
    state('true',  style({ transform: 'translateX(' + x + ')' }) ),
    transition('0 => 1', animate( duration + 'ms ease-in')),
    transition('1 => 0', animate( duration + 'ms ease-out')),
  ]);
}

