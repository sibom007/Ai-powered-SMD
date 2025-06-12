"use client";
interface Props {
  title: string;
}

export function LoadingState({ title }: Props) {
  return (
    <div className="min-h-screen z-30 relative flex items-center justify-center">
      <div className="absolute ring-0 left-24">
        <div className="w-64 h-64 rounded-xl bg-white shadow-lg flex items-center justify-center relative overflow-hidden">
          <div>
            <div className="relative z-10 flex flex-col items-center space-y-8">
              <div className="relative">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  className="drop-shadow-lg">
                  <circle
                    cx="60"
                    cy="60"
                    r="55"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="10 5"
                    className="text-primary/30">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 60 60;360 60 60"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  <circle
                    cx="60"
                    cy="60"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-primary/50">
                    <animate
                      attributeName="r"
                      values="35;45;35"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  <defs>
                    <linearGradient
                      id="radarGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%">
                      <stop
                        offset="0%"
                        stopColor="currentColor"
                        stopOpacity="0"
                        className="text-primary"
                      />
                      <stop
                        offset="100%"
                        stopColor="currentColor"
                        stopOpacity="0.8"
                        className="text-primary"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 60 60 L 60 15 A 45 45 0 0 1 90 45 Z"
                    fill="url(#radarGradient)"
                    opacity="0.6">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 60 60;360 60 60"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </path>

                  <circle
                    cx="60"
                    cy="60"
                    r="8"
                    fill="currentColor"
                    className="text-primary">
                    <animate
                      attributeName="r"
                      values="6;10;6"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  <g className="text-primary" opacity="0.7">
                    <circle cx="60" cy="30" r="3" fill="currentColor">
                      <animate
                        attributeName="opacity"
                        values="0.3;1;0.3"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="85" cy="45" r="2" fill="currentColor">
                      <animate
                        attributeName="opacity"
                        values="0.3;1;0.3"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="0.2s"
                      />
                    </circle>
                    <circle cx="85" cy="75" r="2" fill="currentColor">
                      <animate
                        attributeName="opacity"
                        values="0.3;1;0.3"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="0.4s"
                      />
                    </circle>
                    <circle cx="60" cy="90" r="3" fill="currentColor">
                      <animate
                        attributeName="opacity"
                        values="0.3;1;0.3"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="0.6s"
                      />
                    </circle>
                    <circle cx="35" cy="75" r="2" fill="currentColor">
                      <animate
                        attributeName="opacity"
                        values="0.3;1;0.3"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="0.8s"
                      />
                    </circle>
                    <circle cx="35" cy="45" r="2" fill="currentColor">
                      <animate
                        attributeName="opacity"
                        values="0.3;1;0.3"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="1s"
                      />
                    </circle>

                    <path
                      d="M60,30 L85,45 L85,75 L60,90 L35,75 L35,45 L60,30"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.4"
                      strokeDasharray="3,3">
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;6"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </path>

                    <g strokeDasharray="2,2" opacity="0.3">
                      <line
                        x1="60"
                        y1="30"
                        x2="60"
                        y2="60"
                        stroke="currentColor"
                        strokeWidth="1">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;4"
                          dur="0.8s"
                          repeatCount="indefinite"
                        />
                      </line>
                      <line
                        x1="85"
                        y1="45"
                        x2="60"
                        y2="60"
                        stroke="currentColor"
                        strokeWidth="1">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;4"
                          dur="0.8s"
                          repeatCount="indefinite"
                          begin="0.1s"
                        />
                      </line>
                      <line
                        x1="85"
                        y1="75"
                        x2="60"
                        y2="60"
                        stroke="currentColor"
                        strokeWidth="1">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;4"
                          dur="0.8s"
                          repeatCount="indefinite"
                          begin="0.2s"
                        />
                      </line>
                      <line
                        x1="60"
                        y1="90"
                        x2="60"
                        y2="60"
                        stroke="currentColor"
                        strokeWidth="1">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;4"
                          dur="0.8s"
                          repeatCount="indefinite"
                          begin="0.3s"
                        />
                      </line>
                      <line
                        x1="35"
                        y1="75"
                        x2="60"
                        y2="60"
                        stroke="currentColor"
                        strokeWidth="1">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;4"
                          dur="0.8s"
                          repeatCount="indefinite"
                          begin="0.4s"
                        />
                      </line>
                      <line
                        x1="35"
                        y1="45"
                        x2="60"
                        y2="60"
                        stroke="currentColor"
                        strokeWidth="1">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;4"
                          dur="0.8s"
                          repeatCount="indefinite"
                          begin="0.5s"
                        />
                      </line>
                    </g>
                  </g>
                </svg>

                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-spin"
                  style={{ animationDuration: "3s" }}
                />
              </div>
            </div>

            <h1>
              <div className="flex items-center gap-1">
                <div className="bg-safe rounded-full size-1.5 mt-0.5" />
                <span className="text-center font-semibold text-sm text-gray-500">
                  Loading : {title}
                </span>
              </div>
            </h1>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden opacity-30">
            <svg
              viewBox="0 0 700 120"
              preserveAspectRatio="none"
              className="w-full h-full">
              <defs>
                <pattern
                  id="loadingCircuit"
                  x="0"
                  y="0"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse">
                  <path
                    d="M0 15h30M15 0v30"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-primary"
                  />
                  <circle
                    cx="15"
                    cy="15"
                    r="1.5"
                    fill="currentColor"
                    className="text-primary">
                    <animate
                      attributeName="opacity"
                      values="0.3;1;0.3"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </pattern>
              </defs>
              <rect
                x="0"
                y="0"
                width="1200"
                height="120"
                fill="url(#loadingCircuit)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
