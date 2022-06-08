import handlebars from 'handlebars';

//Interface to allow dinamic variables
interface ITemplateVariable {
    [key: string]: string | number;
}

interface IParseMailTemplate {
    template: string;
    variables: ITemplateVariable;
}
export default class HandleBarsMailTemplate {

    public async parse({template, variables}:
         IParseMailTemplate): Promise<string> {
        
            const parseTemplate = handlebars.compile(template);

            return parseTemplate(variables);
    }


}