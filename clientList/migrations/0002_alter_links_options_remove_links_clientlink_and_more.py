# Generated by Django 4.1.3 on 2022-11-03 22:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('clientList', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='links',
            options={'ordering': ['contactlink']},
        ),
        migrations.RemoveField(
            model_name='links',
            name='clientlink',
        ),
        migrations.RemoveField(
            model_name='links',
            name='contactlink',
        ),
        migrations.AddField(
            model_name='links',
            name='clientlink',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='clientlink', to='clientList.client'),
        ),
        migrations.AddField(
            model_name='links',
            name='contactlink',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='contactlink', to='clientList.contact'),
        ),
    ]
