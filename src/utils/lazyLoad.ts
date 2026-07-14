import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function lazyWithPreload<P = any>(
  factory: () => Promise<{ default: React.ComponentType<P> }>
) {
  const Component = React.lazy(factory) as React.LazyExoticComponent<React.ComponentType<P>> & {
    preload?: () => Promise<unknown>;
  };
  Component.preload = factory;
  return Component;
}