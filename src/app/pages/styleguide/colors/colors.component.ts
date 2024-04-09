import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  upperCase = (text: String) => {
    return text.toUpperCase()
  }

  colorThemes: Array<{ colorThemeTitle: string, colors: Array<{ name: String, color: string }> }> =
    [
      {
        colorThemeTitle: 'Brand Colors',
        colors: [
          {
            name: 'brand-primary',
            color: '#00a591',
          },
          {
            name: 'brand-secondary',
            color: '#ffa200',
          },
        ],
      },
      {
        colorThemeTitle: 'Primary GUI colours',
        colors: [
          {
            name: 'primary',
            color: '#00a591',
          },
          {
            name: 'secondary',
            color: '#3f4f58',
          },
          {
            name: 'tertiary',
            color: '#f1f2f5',
          },
          {
            name: 'gray-01',
            color: '#fcfcfd',
          },
          {
            name: 'gray-03',
            color: '#dbdee5',
          },
          {
            name: 'gray-04',
            color: '#b5baca',
          },
        ]
      },
      {
        colorThemeTitle: 'Semantic colours',
        colors: [
          {
            name: 'success',
            color: '#57b76c',
          },
          {
            name: 'danger',
            color: '#d22028',
          },
          {
            name: 'warning',
            color: '#ffab00',
          },
          {
            name: 'info',
            color: '#0269c8',
          },
        ]
      },
      {
        colorThemeTitle: 'Greyscale',
        colors: [
          {
            name: 'gray-900',
            color: '#101720',
          },
          {
            name: 'gray-600',
            color: '#606873',
          },
          {
            name: 'gray-400',
            color: '#a8b0bd',
          },
          {
            name: 'gray-300',
            color: '#ccd4e2',
          },
          {
            name: 'white',
            color: '#ffffff',
          },
        ]
      },
      {
        colorThemeTitle: 'Accent colours',
        colors: [
          {
            name: 'accent-001',
            color: '#66a500',
          },
          {
            name: 'accent-002',
            color: '#00a556',
          },
          {
            name: 'accent-003',
            color: '#00a59b',
          },
          {
            name: 'accent-004',
            color: '#0087a5',
          },
          {
            name: 'accent-005',
            color: '#0042a5',
          },
          {
            name: 'accent-006',
            color: '#8e00a5',
          },
        ]
      },
      {
        colorThemeTitle: 'Transparent colors',
        colors: [
          {
            name: 'red-transperant',
            color: 'rgba(210, 32, 40, 0.15)',
          },
          {
            name: 'yellow-transperant',
            color: 'rgba(255, 171, 0, 0.15)',
          },
          {
            name: 'blue-transperant',
            color: 'rgba(2, 105, 200, 0.15)',
          },
          {
            name: 'green-transperant',
            color: 'rgba(87, 183, 108, 0.15)',
          }
        ]
      },
      {
        colorThemeTitle: 'Other..',
        colors: [
          {
            name: 'blue-light',
            color: '#dee6f3',
          },
          {
            name: 'background',
            color: '#F2F6F9',
          },
          {
            name: 'notification-red',
            color: '#FF6767',
          }
        ]
      }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
