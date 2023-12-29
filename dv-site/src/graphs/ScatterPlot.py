import matplotlib.pyplot as plt
from matplotlib_venn import venn2
import plotly.graph_objects as go
from PIL import Image

# Step 1: Create the Venn diagram using matplotlib
set_A = set([1, 2, 3, 4])
set_B = set([3, 4, 5, 6])

venn_diagram = venn2([set_A, set_B], set_labels=('Set A', 'Set B'))

# Explicitly show the Matplotlib figure to ensure it is fully rendered
plt.show()

# Save the Matplotlib figure as an image
plt.savefig('venn_diagram.png')

# Step 2: Convert to an interactive plotly figure
img = Image.open('venn_diagram.png')

fig = go.Figure()
fig.add_trace(go.Image(z=img))
fig.update_layout(
    images=[go.layout.Image(
        source=img,
        x=0,
        sizex=img.width,
        y=img.height,
        sizey=img.height,
        xref="x",
        yref="y",
        opacity=1,
        layer="below",
    )]
)

# Save the interactive figure as an HTML file
fig.write_html('venn_diagram_interactive.html')
