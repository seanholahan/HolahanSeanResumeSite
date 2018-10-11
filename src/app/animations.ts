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
      transform: 'translateY(0)',
      opacity: 1
    })),

    state('visible', style({
      transform: 'translateY(-100%)',
      opacity: 1
    })),
    state('opaque', style({
      transform: 'translateY(-100%)',
      opacity: 0
    })),

    transition('hidden <=> visible', animate('800ms 300ms ease-out')),
    transition('opaque <=> visible', animate('200ms 300ms'))
  ])
}


export function descriptionAnimation(triggerName,  idleBgColor, activeBgColor): AnimationTriggerMetadata {
  return trigger(triggerName, [
    state('active', style({
      clipPath: 'polygon(0 78%, 100% 62.5%, 100% 100%, 0 100%)',
      backgroundColor: activeBgColor// '#ddbc42'//'#ddbc42c7'//
    })),
    state('idle', style({
      clipPath: 'polygon(0px 85%, 100% 85%, 100% 100%, 0px 100%)',
      backgroundColor:idleBgColor// '#ddbc42c7'
    })),
    transition('idle <=> active', animate('100ms'))
  ])
}












