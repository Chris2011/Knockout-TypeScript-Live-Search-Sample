/**
 *
 * @author Chrl
 */
export class LanguageType {
    private icon: string;
    private languageName: string;
    private fileExt: string;
    //    private isPluginRequired: boolean;

    constructor(languageName: string, fileExt: string, isPluginRequired: boolean) {
        this.icon = fileExt || languageName;
        this.languageName = languageName;
        this.fileExt = fileExt || languageName;
        //        this.isPluginRequired = isPluginRequired;
    }

    public get Icon() {
        return this.icon.toLowerCase();
    }

    public get LanguageName(): string {
        return this.languageName;
    }

    public set LanguageName(value: string) {
        this.languageName = value;
    }

    public get FileExt(): string {
        return this.fileExt.toLowerCase();
    }

    public setExt(languageType: LanguageType): void {
        console.log(`Chosen extension - ${languageType.FileExt}`);
    }
}