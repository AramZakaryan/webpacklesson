export type buildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string
    build: string
    html: string
}

export interface BuildOptions {
    mode: buildMode
    paths: BuildPaths
    isDevelopment: boolean
    port: number
}

export interface BuildEnv {
    mode: buildMode
    port: number
}