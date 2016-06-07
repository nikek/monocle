import './svg-icons.tag'
import './range-editor.tag'
// import './filter-editor.tag'
// import './aggregation-editor.tag'
import './chart/mon-chart.tag'

<app>
  <svg-icons></svg-icons>

  <div class="component">
    <div class="graph-wrapper">
      <mon-chart options={options} range={data.range} data={data.series}></mon-chart>
    </div>
  </div>

  <range-editor></range-editor>
  <!-- <filter-editor></filter-editor>
  <aggregation-editor></aggregation-editor> -->

  <button type="button" onclick="{doQuery}" class="queryBtn">QUERY</button>


  <script>
    this.connectCerebral({
      data: ['component', 'data']
    }, {
      doQuery: ['component', 'clickQuery']
    })

    this.options = {
      type: 'chart',
      axis: true,
      legendVisible: false,
      stacked: false,
      valueScale: 'linear',
      zeroBased: false
    };
  </script>

  <style scoped type="less">
    :scope { display: block; }

    .queryBtn {
      display: block;
      margin: 0 auto;
    }
  </style>
</app>
