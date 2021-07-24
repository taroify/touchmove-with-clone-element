# Using the following approach on a cloneElement invalidates onTouchMove

```tsx
<div
    ref={rootRef}
    className="rate"
    onTouchMove={onTouchMove}
>
    {
        cloneElement(full ? fullIcon : voidIcon, {
            className: classNames("rate__icon", {
                "rate__icon--full": full,
            }),
        })
    }
</div>
```
