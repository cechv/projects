using System;
using System.Collections.Generic;
using System.Windows;
using System.Windows.Controls;

namespace vypocet_obsahu
{
    public abstract class Obrazec
    {
        public abstract double VypocitatObsah();
        public abstract UIElement[] VytvoreniLabelu();

        protected UIElement[] CreateLabels(params string[] jmenaPromenne)
        {
            var labels = new List<UIElement>();
            foreach (var jmenoPromenne in jmenaPromenne)
            {
                labels.Add(new Label { Content = jmenoPromenne, Name = $"{jmenoPromenne}Label" });
            }
            return labels.ToArray();
        }
    }

    public class Ctverec : Obrazec
    {
        public double a { get; set; }

        public override double VypocitatObsah()
        {
            return a * a;
        }
        public override UIElement[] VytvoreniLabelu()
        {
            return CreateLabels("a");
        }
    }

    public class Trojuhelnik : Obrazec
    {
        public double a { get; set; }
        public double v { get; set; }

        public override double VypocitatObsah()
        {
            return (a * v) / 2;
        }
        public override UIElement[] VytvoreniLabelu()
        {
            return CreateLabels("a", "v");
        }
    }

    public class Kruh : Obrazec
    {
        public double prumer { get; set; }

        public override double VypocitatObsah()
        {
            return Math.PI * Math.Pow(prumer, 2);
        }
        public override UIElement[] VytvoreniLabelu()
        {
            return CreateLabels("prumer");
        }
    }

    public class Obdelnik : Obrazec
    {
        public double a { get; set; }
        public double b { get; set; }

        public override double VypocitatObsah() => a * b;
        public override UIElement[] VytvoreniLabelu() 
        {
           return CreateLabels("a", "b"); 
        }
    }

    public class Lichobeznik : Obrazec
    {
        public double a { get; set; }
        public double c { get; set; }
        public double v { get; set; }

        public override double VypocitatObsah()
        {
            return ((a + c) * v) / 2;
        }
        public override UIElement[] VytvoreniLabelu() 
        { 
            return CreateLabels("a", "c", "v"); 
        }
    }
}
