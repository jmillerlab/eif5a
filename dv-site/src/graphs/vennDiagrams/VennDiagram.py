import pandas as pd
from matplotlib_venn import venn2
import plotly.graph_objects as go
import plotly.io as pio

def create_interactive_venn_diagram():
    # Dummy data
    data = {'Set1_Column_Name': ['A', 'B', 'C', 'D'],
            'Set2_Column_Name': ['C', 'D', 'E', 'F']}

    # Create a DataFrame
    df = pd.DataFrame(data)

    # Extract unique elements from each set
    set1 = set(df['Set1_Column_Name'].dropna())
    set2 = set(df['Set2_Column_Name'].dropna())

    # Compute the intersection and unique elements in each set
    intersection = set1.intersection(set2)
    unique_set1 = set1 - intersection
    unique_set2 = set2 - intersection

    # Create the Venn diagram using matplotlib for calculation
    venn_diagram = venn2(subsets=(len(unique_set1), len(unique_set2), len(intersection)),
                         set_labels=('Set 1', 'Set 2'))

    # Extract coordinates of the circles
    x1, y1 = venn_diagram.get_label_by_id('10').get_position()
    x2, y2 = venn_diagram.get_label_by_id('01').get_position()

    # Create a Plotly figure
    fig = go.Figure()

    # Add circles for each set
    fig.add_trace(go.Scatter(x=[x1], y=[y1], mode='markers', hoverinfo='text',
                             marker=dict(size=40, color='rgba(255,0,0,0.5)'),
                             text='Set 1: {}'.format(unique_set1)))

    fig.add_trace(go.Scatter(x=[x2], y=[y2], mode='markers', hoverinfo='text',
                             marker=dict(size=40, color='rgba(0,0,255,0.5)'),
                             text='Set 2: {}'.format(unique_set2)))

    # Add a marker for the intersection
    fig.add_trace(go.Scatter(x=[x1 + (x2 - x1) / 2], y=[y1 + (y2 - y1) / 2], mode='markers', hoverinfo='text',
                             marker=dict(size=40, color='rgba(0,255,0,0.5)'),
                             text='Intersection: {}'.format(intersection)))

    # Display the plot
    fig.show()

    # Save the interactive HTML file
    pio.write_html(fig, file='venn_diagram.html', full_html=True, include_plotlyjs='cdn')

if __name__ == "__main__":
    create_interactive_venn_diagram()