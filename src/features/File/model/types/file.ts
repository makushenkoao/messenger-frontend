type TFile = 'Buffer';

export interface DownloadFilePayload {
    type: TFile;
    data: number[];
}
