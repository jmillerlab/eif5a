import pandas as pd
import plotly.express as px
import plotly.io as pio

def create_scatterplot(csv_path, output_html_path):
    data = pd.read_csv(csv_path)
    scatterplot = px.scatter(
        data_frame=data,
        x="log2FoldChange",
        hover_data=["gene_name", "gene_id"],
        y="-log10(padj)",
        size_max=13,
        color="-log10(padj)",
    )

    scatterplot.update_layout(
        autosize=True,
        margin=dict(l=20, r=20, t=20, b=20),
        plot_bgcolor='white',
    )

    scatterplot.update_xaxes(showgrid=True, gridwidth=0.5, gridcolor='lightgray', zeroline=True, zerolinecolor='lightgray')
    scatterplot.update_yaxes(showgrid=True, gridwidth=0.5, gridcolor='lightgray')

    # Set explicit axis ranges to include zero
    scatterplot.update_yaxes(range=[data['-log10(padj)'].min(), data['-log10(padj)'].max()])

    pio.write_html(scatterplot, file=output_html_path, full_html=False, include_plotlyjs='cdn')

if __name__ == "__main__":
    create_scatterplot('DHS_DOHHvsWT_EC\DHS_DOHHvsWT_EC.all.cancer.csv', 'DHS_DOHHvsWT_EC\DHS_DOHHvsWT_EC.all.cancer.html')
    create_scatterplot('DHS_DOHHvsWT_EC\DHS_DOHHvsWT_EC.DEG.all.csv', 'DHS_DOHHvsWT_EC\DHS_DOHHvsWT_EC.DEG.all.html')
