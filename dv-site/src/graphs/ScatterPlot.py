# import pandas as pd
# import plotly.express as px
# import plotly.io as pio

# def create_scatterplot(csv_path, output_html_path):
#     data = pd.read_csv(csv_path)
#     scatterplot = px.scatter(
#         data_frame=data,
#         x="log2FoldChange",
#         hover_data=["gene_name", "gene_id"],
#         y="-log10(padj)",
#         size_max=13,
#         color="-log10(padj)",
#         color_continuous_scale=px.colors.sequential.Bluered,      # set marker colors. When color colum is numeric data

#     )

#     scatterplot.update_layout(
#         autosize=True,
#         margin=dict(l=20, r=20, t=20, b=20),
#         plot_bgcolor='white',

#     )

#     scatterplot.update_xaxes(showgrid=True, gridwidth=0.5, gridcolor='lightgray', zeroline=True, zerolinecolor='lightgray')
#     scatterplot.update_yaxes(showgrid=True, gridwidth=0.5, gridcolor='lightgray')

#     # Set explicit axis ranges to include zero
#     scatterplot.update_yaxes(range=[data['-log10(padj)'].min(), data['-log10(padj)'].max()])

#     pio.write_html(scatterplot, file=output_html_path, full_html=False, include_plotlyjs='cdn')

# if __name__ == "__main__":
#     create_scatterplot('DHS_DOHHvsWT_EC\DHS_DOHHvsWT_EC.all.cancer.csv', 'DHS_DOHHvsWT_EC\DHS_DOHHvsWT_EC.all.cancer.html')
#     create_scatterplot('DHS_DOHHvsWT_EC\DHS_DOHHvsWT_EC.DEG.all.csv', 'DHS_DOHHvsWT_EC\DHS_DOHHvsWT_EC.DEG.all.html')

import pandas as pd
import plotly.express as px
import plotly.io as pio
import numpy as np

def create_scatterplot(csv_path, output_html_path):
    data = pd.read_csv(csv_path)

    # Calculate -log10(padj)
    data['-log10(padj)'] = -np.log10(data['padj'])

    # Define thresholds
    p_value_threshold = -np.log10(0.05)  # -log10(0.05)

    # Create a new column for coloring based on significance and log2FoldChange
    data['Category'] = 'Non-Significant'
    data.loc[(data['-log10(padj)'] >= p_value_threshold) & (data['log2FoldChange'] > 0), 'Category'] = 'Positive Significant'
    data.loc[(data['-log10(padj)'] >= p_value_threshold) & (data['log2FoldChange'] < 0), 'Category'] = 'Negative Significant'

    scatterplot = px.scatter(
        data_frame=data,
        x="log2FoldChange",
        y="-log10(padj)",
        hover_data=["gene_name", "gene_id"],
        size_max=13,
        color="Category",
        color_discrete_map={
            "Non-Significant": "lightslategray",
            "Positive Significant": "blue",
            "Negative Significant": "red"
        }
    )

    # Add horizontal and vertical dashed lines for significance thresholds
    scatterplot.add_hline(y=p_value_threshold, line_dash="dash", line_width=0.8, line_color="red")
    scatterplot.add_vline(x=0, line_dash="dash", line_width=0.8, line_color="red")

    scatterplot.update_layout(
        autosize=True,
        margin=dict(l=20, r=20, t=20, b=20),
        # plot_bgcolor='whitesmoke',
        # paper_bgcolor='whitesmoke',  # Set the entire background to whitesmoke
        
        plot_bgcolor='white',
        paper_bgcolor='white',  # Set the entire background to whitesmoke

    )
    scatterplot.update_xaxes(showgrid=True, gridwidth=0.5, gridcolor='lightgray', zeroline=True, zerolinecolor='lightgray')
    scatterplot.update_yaxes(showgrid=True, gridwidth=0.5, gridcolor='lightgray',zeroline=True, zerolinecolor='lightgray')

    pio.write_html(scatterplot, file=output_html_path, full_html=False, include_plotlyjs='cdn')

if __name__ == "__main__":

     create_scatterplot('DHS_DOHHvsWT_EC\DHS_DOHHvsWT_EC.DEG.all.csv', 'DHS_DOHHvsWT_EC\DHS_DOHHvsWT_EC.DEG.all.html')
     create_scatterplot('DHS_DOHHvsWT_EC\DHS_DOHHvsWT_EC.all.cancer.csv', 'DHS_DOHHvsWT_EC\DHS_DOHHvsWT_EC.all.cancer.html')

     create_scatterplot('DHS_DOHHvsTar4_EC\DHS_DOHHvsTar4_EC.DEG.all.csv', 'DHS_DOHHvsTar4_EC\DHS_DOHHvsTar4_EC.DEG.all.html')
     create_scatterplot('DHS_DOHHvsTar4_EC\DHS_DOHHvsTar4_EC.all.cancer.csv', 'DHS_DOHHvsTar4_EC\DHS_DOHHvsTar4_EC.all.cancer.html')

     create_scatterplot('eIF5A_DDvsDHS_DOHH\eIF5A_DDvsDHS_DOHH.DEG.all.csv', 'eIF5A_DDvsDHS_DOHH\eIF5A_DDvsDHS_DOHH.DEG.all.html')
     create_scatterplot('eIF5A_DDvsDHS_DOHH\eIF5A_DDvsDHS_DOHH.all.cancer.csv', 'eIF5A_DDvsDHS_DOHH\eIF5A_DDvsDHS_DOHH.all.cancer.html')

     create_scatterplot('eIF5A_DDvseIF5A\eIF5A_DDvseIF5A.DEG.all.csv', 'eIF5A_DDvseIF5A\eIF5A_DDvseIF5A.DEG.all.html')
     create_scatterplot('eIF5A_DDvseIF5A\eIF5A_DDvseIF5A.all.cancer.csv', 'eIF5A_DDvseIF5A\eIF5A_DDvseIF5A.all.cancer.html')

     create_scatterplot('eIF5A_DDvsK50A_DD\eIF5A_DDvsK50A_DD.DEG.all.csv', 'eIF5A_DDvsK50A_DD\eIF5A_DDvsK50A_DD.DEG.all.html')
     create_scatterplot('eIF5A_DDvsK50A_DD\eIF5A_DDvsK50A_DD.all.cancer.csv', 'eIF5A_DDvsK50A_DD\eIF5A_DDvsK50A_DD.all.cancer.html')

     create_scatterplot('eIF5A_DDvsTar4_EC\eIF5A_DDvsTar4_EC.DEG.all.csv', 'eIF5A_DDvsTar4_EC\eIF5A_DDvsTar4_EC.DEG.all.html')
     create_scatterplot('eIF5A_DDvsTar4_EC\eIF5A_DDvsTar4_EC.all.cancer.csv', 'eIF5A_DDvsTar4_EC\eIF5A_DDvsTar4_EC.all.cancer.html')

     create_scatterplot('eIF5A_DDvsWT_EC\eIF5A_DDvsWT_EC.DEG.all.csv', 'eIF5A_DDvsWT_EC\eIF5A_DDvsWT_EC.DEG.all.html')
     create_scatterplot('eIF5A_DDvsWT_EC\eIF5A_DDvsWT_EC.all.cancer.csv', 'eIF5A_DDvsWT_EC\eIF5A_DDvsWT_EC.all.cancer.html')

     create_scatterplot('eIF5AvsTar4_EC\eIF5AvsTar4_EC.DEG.all.csv', 'eIF5AvsTar4_EC\eIF5AvsTar4_EC.DEG.all.html')
     create_scatterplot('eIF5AvsTar4_EC\eIF5AvsTar4_EC.all.cancer.csv', 'eIF5AvsTar4_EC\eIF5AvsTar4_EC.all.cancer.html')

     create_scatterplot('eIF5AvsWT_EC\eIF5AvsWT_EC.DEG.all.csv', 'eIF5AvsWT_EC\eIF5AvsWT_EC.DEG.all.html')
     create_scatterplot('eIF5AvsWT_EC\eIF5AvsWT_EC.all.cancer.csv', 'eIF5AvsWT_EC\eIF5AvsWT_EC.all.cancer.html')

     create_scatterplot('K50A_DDvsDHS_DOHH\K50A_DDvsDHS_DOHH.DEG.all.csv', 'K50A_DDvsDHS_DOHH\K50A_DDvsDHS_DOHH.DEG.all.html')
     create_scatterplot('K50A_DDvsDHS_DOHH\K50A_DDvsDHS_DOHH.all.cancer.csv', 'K50A_DDvsDHS_DOHH\K50A_DDvsDHS_DOHH.all.cancer.html')

     create_scatterplot('K50A_DDvsTar4_EC\K50A_DDvsTar4_EC.DEG.all.csv', 'K50A_DDvsTar4_EC\K50A_DDvsTar4_EC.DEG.all.html')
     create_scatterplot('K50A_DDvsTar4_EC\K50A_DDvsTar4_EC.all.cancer.csv', 'K50A_DDvsTar4_EC\K50A_DDvsTar4_EC.all.cancer.html')

     create_scatterplot('K50A_DDvsWT_EC\K50A_DDvsWT_EC.DEG.all.csv', 'K50A_DDvsWT_EC\K50A_DDvsWT_EC.DEG.all.html')
     create_scatterplot('K50A_DDvsWT_EC\K50A_DDvsWT_EC.all.cancer.csv', 'K50A_DDvsWT_EC\K50A_DDvsWT_EC.all.cancer.html')

     create_scatterplot('Tar4_ECvsWT_EC\Tar4_ECvsWT_EC.DEG.all.csv', 'Tar4_ECvsWT_EC\Tar4_ECvsWT_EC.DEG.all.html')
     create_scatterplot('Tar4_ECvsWT_EC\Tar4_ECvsWT_EC.all.cancer.csv', 'Tar4_ECvsWT_EC\Tar4_ECvsWT_EC.all.cancer.html')


