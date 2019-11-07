# Link

Change transitions on the fly. The next transition is evaluated before
the route change, allowing to easily reach and leave the same url with
different transitions.

## Props
### `onClick`

type: `func`


Function fired on link click.

```javascript
<Link
   onClick={() => console.log("I execute after link click")}
   {...linkProps}
>
   {linkChildren}
</Link>
```


### `timeout`

type: `number`


Transition timeout in milliseconds. Used as fallback if not provided on
`transition` prop object / function. Default value comes from
`globalTransitionProps` from [`<Navigation />`](/docs/navigation).

```javascript
<Navigation globalTransitionProps={{...props, timeout: 600}}>
 ...
   <Link
     // timeout is 600 here, comes from navigation
     {...linkProps}
   >
     {linkChildren}
   </Link>

   <Link
     timeout={500} // 500 take over the 600
     {...linkProps}
   >
     {linkChildren}
   </Link>

   <Link
     // here you dont need to set, because it is defined in transition prop
     transition={{
       classNames: 'my-animation',
       timeout: 700
       ...moreProps
     }}
     {...linkProps}
   >
     {linkChildren}
   </Link>
 ...
</Navigation>
```


### `transition`

type: `union(string|object|func)`


Transition to be applied when changing route. It is passed down to
[`<CSSTransition />`](https://reactcommunity.org/react-transition-group/css-transition)

Default value comes from context, defined in
[`<Navigation />`](/docs/navigation) `globalTransitionProps`.

```javascript
<Navigation
   globalTransitionProps={{
     ...props,
     timeout: 600,
     classNames: 'fade'
   }}
>
   <Link
     // transition of this link is "fade" with 600 ms timeout
     {...linkProps}
   >
     {linkChildren}
   </Link>
</Navigation>
```

If string, it is the `classNames` prop:

```javascript
<Link transition='my-animation' {...linkProps}>
   {linkChildren}
</Link>
```

Object:

```javascript
<Link
   transition={{
     classNames: 'my-animation',
     ...moreProps
   }}
   {...linkProps}
>
   {linkChildren}
</Link>
```

A function that return props for CSSTransition:

```javascript
<Link
   transition={() => {
     // ...some logic
     return ({
       classNames: 'my-animation',
       ...moreProps
     })
   }}
   {...linkProps}
>
   {linkChildren}
</Link>
```


\*Ref and other props are passed to [react router `<Link />`](https://reacttraining.com/react-router/web/api/Link).


