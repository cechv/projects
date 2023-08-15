using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Collections.ObjectModel;


namespace vypocet_obsahu
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
      

        public MainWindow()
        {
            InitializeComponent();                 
          
        }


        string selectedName;
        private Obrazec selectedShape;

        private void Vybrat(object sender, RoutedEventArgs e)
        {
            input0.Visibility = Visibility.Hidden;
            input1.Visibility = Visibility.Hidden;
            input2.Visibility = Visibility.Hidden;
            input3.Visibility = Visibility.Hidden;
            input4.Visibility = Visibility.Hidden;

            input0.Text = "";
            input1.Text = "";
            input2.Text = "";
            input3.Text = "";
            input4.Text = "";


            labelContainer.Children.Clear();

            if (comboBox1.SelectedItem is ComboBoxItem selectedComboBoxItem)
            {
                selectedName = selectedComboBoxItem.Name;
                Uri fileUri = new Uri("pack://application:,,,/images/" + selectedName + ".png");
                formulaImg.Source = new BitmapImage(fileUri);
            }

            switch (selectedName)
            {
                case "ctverec":
                    selectedShape = new Ctverec();
                    input0.Visibility = Visibility.Visible;
                    break;
                case "trojuhelnik":
                    selectedShape = new Trojuhelnik();
                    input0.Visibility = Visibility.Visible;
                    input1.Visibility = Visibility.Visible;
                    break;
                case "kruh":
                    selectedShape = new Kruh();
                    input0.Visibility = Visibility.Visible;
                    break;
                case "obdelnik":
                    selectedShape = new Obdelnik();
                    input0.Visibility = Visibility.Visible;
                    input1.Visibility = Visibility.Visible;
                    break;
                case "lichobeznik":
                    selectedShape = new Lichobeznik();
                    input0.Visibility = Visibility.Visible;
                    input1.Visibility = Visibility.Visible;
                    input2.Visibility = Visibility.Visible;
                    break;
            }

            UIElement[] labely = selectedShape.VytvoreniLabelu();
            foreach (var label in labely)
            {
                labelContainer.Children.Add(label);
            }

        }

        private void Vypocitat(object sender, RoutedEventArgs e)
        {        
            if (selectedShape != null)
            {
                // Populate attributes based on user input
                try
                {
                    switch (selectedShape)
                    {
                        case Ctverec ctverec:
                            ctverec.a = double.Parse(((TextBox)textBoxContainer.FindName("input0")).Text);
                            break;
                        case Trojuhelnik trojuhelnik:
                            trojuhelnik.a = double.Parse(((TextBox)textBoxContainer.FindName("input0")).Text);
                            trojuhelnik.v = double.Parse(((TextBox)textBoxContainer.FindName("input1")).Text);
                            break;
                        case Kruh kruh:
                            kruh.prumer = double.Parse(((TextBox)textBoxContainer.FindName("input0")).Text);
                            break;
                        case Obdelnik obdelnik:
                            obdelnik.a = double.Parse(((TextBox)textBoxContainer.FindName("input0")).Text);
                            obdelnik.b = double.Parse(((TextBox)textBoxContainer.FindName("input1")).Text);
                            break;
                        case Lichobeznik lichobeznik:
                            lichobeznik.a = double.Parse(((TextBox)textBoxContainer.FindName("input0")).Text);
                            lichobeznik.v = double.Parse(((TextBox)textBoxContainer.FindName("input1")).Text);
                            lichobeznik.c = double.Parse(((TextBox)textBoxContainer.FindName("input2")).Text);
                            break;
                    }
                }
                catch
                {
                    MessageBox.Show("Špatně zadané informace");
                }
                

                double area = selectedShape.VypocitatObsah();
                Vysledek.Text = area.ToString();
            }
        }
    }
}
