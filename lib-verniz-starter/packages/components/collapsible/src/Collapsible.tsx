import * as React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>
>((props, ref) => (
  <CollapsiblePrimitive.Root data-slot='collapsible' ref={ref} {...props} />
));

Collapsible.displayName = 'Collapsible';

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleTrigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger>
>((props, ref) => (
  <CollapsiblePrimitive.CollapsibleTrigger
    data-slot='collapsible-trigger'
    ref={ref}
    {...props}
  />
));

CollapsibleTrigger.displayName = 'CollapsibleTrigger';

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent>
>((props, ref) => (
  <CollapsiblePrimitive.CollapsibleContent
    data-slot='collapsible-content'
    ref={ref}
    {...props}
  />
));

CollapsibleContent.displayName = 'CollapsibleContent';

export { Collapsible, CollapsibleTrigger, CollapsibleContent };

