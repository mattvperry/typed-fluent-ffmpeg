/// <reference path=".\typings\main\ambient\node\index.d.ts" />

type input = NodeJS.ReadableStream|string;
type output = NodeJS.WritableStream|string;
type presetCallback = (cmd: FfmpegCommand) => void;
type ffmpegCallback<T, U> = (err: any, data: T) => U;

interface FfprobeData {
    streams: any[];
    format: any;
}

interface FfmpegLogger {
    debug: () => void;
    info: () => void;
    warn: () => void;
    error: () => void;
}

interface FfmpegCommandOptions {
    logger?: FfmpegLogger;
    niceness?: number;
    priority?: number;
    presets?: string;
    preset?: string;
    timeout?: number;
    source?: NodeJS.ReadableStream|string;
}

interface FfmpegComplexFilter {
    filter: string;
    inputs?: string|string[];
    outputs?: string|string[];
    options: any;
}

interface FfmpegFilter {
    description: string;
    input: string;
    multipleInputs: boolean;
    output: string;
    multipleOutputs: boolean;
}

interface FfmpegCodec {
    description: string;
    canDecode: boolean;
    canEncode: boolean;
}

interface FfmpegFormat {
    description: string;
    canDemux: boolean;
    canMux: boolean;
}

interface FfmpegCapabilities<T> {
    availableFilters(callback: ffmpegCallback<{ [k: string]: FfmpegFilter }, any>): void;
    getAvailableFilters(callback: ffmpegCallback<{ [k: string]: FfmpegFilter }, any>): void;
    availableCodecs(callback: ffmpegCallback<{ [k: string]: FfmpegCodec }, any>): void;
    getAvailableCodecs(callback: ffmpegCallback<{ [k: string]: FfmpegCodec }, any>): void;
    availableFormats(callback: ffmpegCallback<{ [k: string]: FfmpegFormat }, any>): void;
    getAvailableFormats(callback: ffmpegCallback<{ [k: string]: FfmpegFormat }, any>): void;

    setFfmpegPath(path: string): T;
    setFfprobePath(path: string): T;
    setFlvtoolPath(path: string): T;
}

interface FfmpegInputs {
    mergeAdd(input: input): this;
    addInput(input: input): this;
    input(input: input): this;

    withInputFormat(format: string): this;
    inputFormat(format: string): this;
    fromFormat(format: string): this;

    withInputFps(fps: number): this;
    withInputFPS(fps: number): this;
    withFpsInput(fps: number): this;
    withFPSInput(fps: number): this;
    inputFps(fps: number): this;
    inputFPS(fps: number): this;
    fpsInput(fps: number): this;
    FPSInput(fps: number): this;

    nativeFramerate(): this;
    withNativeFramerate(): this;
    native(): this;

    setStartTime(seek: string|number): this;
    seekInput(seek: string|number): this;

    loop(duration: string|number): this;
}

interface FfmpegAudio {
    withNoAudio(): this;
    noAudio(): this;

    withAudioCodec(codec: string): this;
    audioCodec(codec: string): this;

    withAudioBitrate(bitrate: string|number): this;
    audioBitrate(bitrate: string|number): this;

    withAudioChannels(channels: string|number): this;
    audioChannels(channels: string|number): this;

    withAudioFrequency(freq: string|number): this;
    audioFrequency(freq: string|number): this;

    withAudioQuality(quality: string|number): this;
    audioQuality(quality: string|number): this;

    withAudioFilter(...filters: string[]): this;
    withAudioFilter(...filters: { filter: string, options: any }[]): this;
    withAudioFilter(filters: string[]): this;
    withAudioFilter(filters: { filter: string, options: any }[]): this;
    withAudioFilters(...filters: string[]): this;
    withAudioFilters(...filters: { filter: string, options: any }[]): this;
    withAudioFilters(filters: string[]): this;
    withAudioFilters(filters: { filter: string, options: any }[]): this;
    audioFilter(...filters: string[]): this;
    audioFilter(...filters: { filter: string, options: any }[]): this;
    audioFilter(filters: string[]): this;
    audioFilter(filters: { filter: string, options: any }[]): this;
    audioFilters(...filters: string[]): this;
    audioFilters(...filters: { filter: string, options: any }[]): this;
    audioFilters(filters: string[]): this;
    audioFilters(filters: { filter: string, options: any }[]): this;
}

interface FfmpegVideo {
    withNoVideo(): this;
    noVideo(): this;

    withVideoCodec(codec: string): this;
    videoCodec(codec: string): this;

    withVideoBitrate(bitrate: string|number): this;
    videoBitrate(bitrate: string|number): this;

    withVideoFilter(...filters: string[]): this;
    withVideoFilter(...filters: { filter: string, options: any }[]): this;
    withVideoFilter(filters: string[]): this;
    withVideoFilter(filters: { filter: string, options: any }[]): this;
    withVideoFilters(...filters: string[]): this;
    withVideoFilters(...filters: { filter: string, options: any }[]): this;
    withVideoFilters(filters: string[]): this;
    withVideoFilters(filters: { filter: string, options: any }[]): this;
    videoFilter(...filters: string[]): this;
    videoFilter(...filters: { filter: string, options: any }[]): this;
    videoFilter(filters: string[]): this;
    videoFilter(filters: { filter: string, options: any }[]): this;
    videoFilters(...filters: string[]): this;
    videoFilters(...filters: { filter: string, options: any }[]): this;
    videoFilters(filters: string[]): this;
    videoFilters(filters: { filter: string, options: any }[]): this;

    withOutputFps(fps: number): this;
    withOutputFPS(fps: number): this;
    withFpsOutput(fps: number): this;
    withFPSOutput(fps: number): this;
    outputFps(fps: number): this;
    outputFPS(fps: number): this;
    fpsOutput(fps: number): this;
    FPSOutput(fps: number): this;
    withFps(fps: number): this;
    withFPS(fps: number): this;
    fps(fps: number): this;
    FPS(fps: number): this;

    takeFrames(frames: number): this;
    withFrames(frames: number): this;
    frames(frames: number): this;
}

interface FfmpegVideoSize {
    keepPixelAspect(): this;
    keepDisplayAspectRatio(): this;
    keepDisplayAspect(): this;
    keepDAR(): this;

    withSize(size: string): this;
    setSize(size: string): this;
    size(size: string): this;

    withAspect(aspect: string|number): this;
    withAspectRatio(aspect: string|number): this;
    setAspect(aspect: string|number): this;
    setAspectRatio(aspect: string|number): this;
    aspect(aspect: string|number): this;
    aspectRatio(aspect: string|number): this;

    applyAutopadding(color: string): this;
    applyAutopadding(pad?: boolean, color?: string): this;
    applyAutoPadding(color: string): this;
    applyAutoPadding(pad?: boolean, color?: string): this;
    applyAutopad(color: string): this;
    applyAutopad(pad?: boolean, color?: string): this;
    applyAutoPad(color: string): this;
    applyAutoPad(pad?: boolean, color?: string): this;
    withAutopadding(color: string): this;
    withAutopadding(pad?: boolean, color?: string): this;
    withAutoPadding(color: string): this;
    withAutoPadding(pad?: boolean, color?: string): this;
    withAutopad(color: string): this;
    withAutopad(pad?: boolean, color?: string): this;
    withAutoPad(color: string): this;
    withAutoPad(pad?: boolean, color?: string): this;
    autopad(color: string): this;
    autopad(pad?: boolean, color?: string): this;
    autoPad(color: string): this;
    autoPad(pad?: boolean, color?: string): this;
}

interface FfmpegOutputs {
    addOutput(output: output, pipeopts?: any): this;
    output(output: output, pipeopts?: any): this;

    seekOutput(seek: string|number): this;
    seek(seek: string|number): this;

    withDuration(duration: string|number): this;
    setDuration(duration: string|number): this;
    duration(duration: string|number): this;

    toFormat(format: string): this;
    withOutputFormat(format: string): this;
    outputFormat(format: string): this;
    format(format: string): this;

    map(spec: string): this;

    updateFlvMetadata(): this;
    flvmeta(): this;
}

interface FfmpegCustom {
    addInputOption(...options: string[]): this;
    addInputOptions(...options: string[]): this;
    withInputOption(...options: string[]): this;
    withInputOptions(...options: string[]): this;
    inputOption(...options: string[]): this;
    inputOptions(...options: string[]): this;

    addOutputOption(...options: string[]): this;
    addOutputOptions(...options: string[]): this;
    addOption(...options: string[]): this;
    addOptions(...options: string[]): this;
    withOutputOption(...options: string[]): this;
    withOutputOptions(...options: string[]): this;
    withOption(...options: string[]): this;
    withOptions(...options: string[]): this;
    outputOption(...options: string[]): this;
    outputOptions(...options: string[]): this;

    filterGraph(spec: string|string[]|FfmpegComplexFilter|FfmpegComplexFilter[], map?: string|string[]): this;
    complexFilter(spec: string|string[]|FfmpegComplexFilter|FfmpegComplexFilter[], map?: string|string[]): this;
}

interface FfmpegMisc {
    usingPreset(preset: string|presetCallback): this;
    preset(preset: string|presetCallback): this;
}

interface FfmpegProcessor {
    exec(): boolean;
    execute(): boolean;
    run(): boolean;
    renice(niceness: number): this;
    kill(signal?: string): this;
}

interface FfmpegRecipes {
    saveToFile(output: string): this;
    save(output: string): this;

    writeToStream(stream: NodeJS.WritableStream, options?: any): NodeJS.WritableStream;
    pipe(stream: NodeJS.WritableStream, options?: any): NodeJS.WritableStream;
    stream(stream: NodeJS.WritableStream, options?: any): NodeJS.WritableStream;

    mergeToFile(target: output, options?: any): this;
    concatenate(target: output, options?: any): this;
    concat(target: output, options?: any): this;
}

interface FfmpegCommand
    extends FfmpegProcessor, FfmpegMisc, FfmpegCustom, FfmpegOutputs,
            FfmpegVideoSize, FfmpegVideo, FfmpegAudio, FfmpegInputs,
            FfmpegRecipes, FfmpegCapabilities<FfmpegCommand>, NodeJS.EventEmitter {
    clone(): FfmpegCommand;

    ffprobe<T>(callback: ffmpegCallback<FfprobeData, T>): T;
    ffprobe<T>(index: number, callback: ffmpegCallback<FfprobeData, T>): T;
    ffprobe<T>(options: string[], callback: ffmpegCallback<FfprobeData, T>): T;
    ffprobe<T>(index: number, options: string[], callback: ffmpegCallback<FfprobeData, T>): T;
    
    on(event: string, listener: Function): this;
    on(event: "start", listener: (commandLine: string) => void): this;
    on(event: "codecData", listener: (data: any) => void): this;
    on(event: "progress", listener: (data: any) => void): this;
    on(event: "error", listener: (err: any, stdout: any, stderr: any) => void): this;
    on(event: "end", listener: () => void): this;
}

interface FfmpegCommandStatic extends FfmpegCapabilities<void> {
    (options: FfmpegCommandOptions): FfmpegCommand;
    (input: input, options: FfmpegCommandOptions): FfmpegCommand;
    new(options: FfmpegCommandOptions): FfmpegCommand;
    new(input: input, options: FfmpegCommandOptions): FfmpegCommand;

    ffprobe(file: input, callback: ffmpegCallback<FfprobeData, any>): void;
    ffprobe(file: input, index: number, callback: ffmpegCallback<FfprobeData, any>): void;
    ffprobe(file: input, options: string[], callback: ffmpegCallback<FfprobeData, any>): void;
    ffprobe(file: input, index: number, options: string[], callback: ffmpegCallback<FfprobeData, any>): void;
}

declare module "fluent-ffmpeg" {
    let ffmpeg: FfmpegCommandStatic;
    export = ffmpeg;
}