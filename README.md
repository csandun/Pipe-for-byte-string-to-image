# Angular Pipe for byte string convert to Img

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular13-bootstrap-pbbkk9)

We can convert base64 string to image content using below **pipe**

```
@Pipe({
  name: 'base64',
})
export class Base64Pipe implements PipeTransform {
  constructor() {}

  public transform(value: any, contentType: string): any {
    var base64Content = `data:${contentType};base64,${value}`;
    return base64Content;
  }
}

```
