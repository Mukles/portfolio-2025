declare module "@barba/core" {
  export interface TransitionData {
    current: {
      container: HTMLElement;
      namespace: string;
    };
    next: {
      container: HTMLElement;
      namespace: string;
    };
    trigger: string;
  }

  export interface Transition {
    name?: string;
    once?(data: TransitionData): Promise<void> | void;
    leave?(data: TransitionData): Promise<void> | void;
    enter?(data: TransitionData): Promise<void> | void;
    beforeEnter?(data: TransitionData): Promise<void> | void;
    afterEnter?(data: TransitionData): Promise<void> | void;
  }

  export interface View {
    namespace: string;
    beforeEnter?(data: TransitionData): void;
    afterEnter?(data: TransitionData): void;
    beforeLeave?(data: TransitionData): void;
    afterLeave?(data: TransitionData): void;
  }

  export interface BarbaInit {
    transitions?: Transition[];
    views?: View[];
    prevent?: (data: any) => boolean;
    debug?: boolean;
    timeout?: number;
    schema?: {
      prefix: string;
      wrapper: string;
    };
  }

  const barba: {
    init(config: BarbaInit): void;
    go(href: string, trigger?: string): void;
    hooks: {
      before: (data: any) => void;
      after: (data: any) => void;
    };
    destroy(): void;
    use(plugin: any): void;
    schema: {
      prefix: string;
      separator: string;
      suffix: string;
    };
    version: string;
  };

  export default barba;
}
