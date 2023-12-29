from matplotlib_venn import venn2
import matplotlib.pyplot as plt

# Example data
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Create Venn diagram
venn2([set1, set2], set_labels=('Set 1', 'Set 2'))

# Show the plot
plt.show()
