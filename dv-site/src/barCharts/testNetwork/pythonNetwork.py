import pandas as pd
import plotly.graph_objects as go

# Load the processed network data from CSV
final_network_df = pd.read_csv('./processed_network_data.csv')

# Extract unique nodes for node properties (adjust if needed based on your CSV structure)
unique_nodes = pd.concat([final_network_df[['Node1', 'Node1_ID', 'Node1_X', 'Node1_Y', 'Node1_Degree', 'Node1_Annotation']],
                          final_network_df[['Node2', 'Node2_ID', 'Node2_X', 'Node2_Y', 'Node2_Degree', 'Node2_Annotation']]
                          .rename(columns={'Node2': 'Node1', 'Node2_ID': 'Node1_ID', 'Node2_X': 'Node1_X',
                                           'Node2_Y': 'Node1_Y', 'Node2_Degree': 'Node1_Degree', 'Node2_Annotation': 'Node1_Annotation'})])
unique_nodes.drop_duplicates(subset='Node1_ID', inplace=True)

# Setup edges
edge_x = []
edge_y = []
for index, row in final_network_df.iterrows():
    edge_x.extend([row['Node1_X'], row['Node2_X'], None])  # None to create segments between edges
    edge_y.extend([row['Node1_Y'], row['Node2_Y'], None])

edge_trace = go.Scatter(
    x=edge_x,
    y=edge_y,
    line=dict(width=0.5, color='#888'),
    hoverinfo='none',
    mode='lines')

# Setup nodes with hover text that includes the annotation
node_trace = go.Scatter(
    x=unique_nodes['Node1_X'],
    y=unique_nodes['Node1_Y'],
    text=unique_nodes['Node1_Annotation'],  # Using annotation for hover text
    hoverinfo='text',  # Ensure hoverinfo includes text for hovering
    mode='markers',
    marker=dict(
        showscale=True,
        colorscale='YlGnBu',
        size=40,  # Scale size for better visibility
        color=unique_nodes['Node1_Degree'],
        colorbar=dict(
            thickness=15,
            title='Node Connections',
            xanchor='left',
            titleside='right'
        ),
        line_width=1))

# Create and display the network graph
fig = go.Figure(data=[edge_trace, node_trace],
                layout=go.Layout(
                    title='Network Graph',
                    showlegend=False,
                    hovermode='closest',
                    margin=dict(b=0, l=0, r=0, t=40),
                    xaxis=dict(showgrid=False, zeroline=False, showticklabels=False),
                    yaxis=dict(showgrid=False, zeroline=False, showticklabels=False)))

# Save the plot to an HTML file
fig.write_html("your_network_plot.html")

fig.show()
