export class DestinoViaje{
    private selected: boolean;
    public services: string[];
    constructor(public n: string, public u: string){
        this.services = ['Piscina','Desayuno'];
    }

    isSelected(): boolean{
        return this.selected;
    }

    setSelected(s: boolean){
        this.selected = s;
    }
}
