# Generated by Django 4.1.3 on 2022-11-03 22:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clientList', '0002_alter_links_options_remove_links_clientlink_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='links',
            options={},
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
            field=models.ManyToManyField(blank=True, related_name='clientlink', to='clientList.client'),
        ),
        migrations.AddField(
            model_name='links',
            name='contactlink',
            field=models.ManyToManyField(blank=True, related_name='contactlink', to='clientList.contact'),
        ),
    ]
