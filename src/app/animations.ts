import {
  animation,state, trigger, animateChild, group,
    transition, animate, style, query, AnimationTriggerMetadata
} from '@angular/animations';






export function homeNavSlideAnim(triggerName): AnimationTriggerMetadata {
  return trigger(triggerName, [
    state('open', style({transform: 'translateY(-14vw)'})),
    transition('open <=> closed', animate('300ms ease-out'))
  ])
}

export function buildingAnimation(triggerName): AnimationTriggerMetadata {
  return trigger(triggerName, [
    state('hidden', style({
      transform: 'translateY(0)'
    })),

    state('visible', style({
      transform: 'translateY(-100%)'
    })),
    transition('hidden <=> visible', animate('800ms 300ms ease-out'))
  ])
}




















//
// trigger('slider', [
//   state('open', style(
//     {
//       transform: 'translateY(-14vw)'
//     }
//   ))
// ])
//

