import { SimplePaletteColorOptions } from '@material-ui/core/styles';
interface Entity {
    color: SimplePaletteColorOptions;
    icon: string;
}
interface Entities {
    person: Entity;
    place: Entity;
    organization: Entity;
    org: Entity;
    title: Entity;
    referencing_string: Entity;
    rs: Entity;
    citation: Entity;
    note: Entity;
    date: Entity;
    correction: Entity;
    keyword: Entity;
    link: Entity;
}
declare module '@material-ui/core/styles' {
    interface Theme {
        entity: Entities;
    }
    interface ThemeOptions {
        entity: Entities;
    }
}
declare const theme: (darkMode: boolean) => import("@material-ui/core").Theme;
export default theme;
