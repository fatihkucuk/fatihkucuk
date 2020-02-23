import {
  trigger,
  animate,
  style,
  group,
  animateChild,
  query,
  stagger,
  transition
} from "@angular/animations";

export const routerTransition = trigger("routerTransition", [
  transition("* <=> *", [
    query(":enter, :leave", style({ position: "absolute", width: "100%" }), {
      optional: true
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateX(-50%)", opacity: 0.2 }),
          animate(
            "0.5s ease-in-out",
            style({ transform: "translateX(0%)", opacity: 1 })
          )
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateX(0%)" }),
          animate(
            "0.5s ease-in-out",
            style({ transform: "translateX(-40%)", opacity: 0.2 })
          )
        ],
        { optional: true }
      )
    ])
  ])
]);
